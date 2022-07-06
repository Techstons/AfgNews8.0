import { useApi } from "@components/context";
import { InputForm } from "@components/ui";
import styled from "@emotion/styled";
import { Send } from "@styled-icons/material";
import {
  addDoc,
  getDocs,
  limit,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState, MouseEvent, KeyboardEvent } from "react";
import { messagesCollection } from "utils/firebase";

type CommentType = {
  isOwner: boolean;
};

interface IDiscussion {
  id: string;
  title: string;
}

interface IMessage {
  id: string;
  articleId: string;
  message: string;
  uid: string;
  author: string;
  photoUrl: string;
  createdAt: Timestamp;
}

const Discussion = ({ id, title }: IDiscussion) => {
  const { user } = useApi();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>();

  const saveToDB = async (e: KeyboardEvent<HTMLInputElement> | MouseEvent) => {
    if (
      ((e as KeyboardEvent<HTMLInputElement>).key == "Enter" ||
        (e as MouseEvent).type == "click") &&
      message.length > 0
    ) {
      try {
        if (message) {
          const newMsg = {
            articleId: id,
            createdAt: new Date(),
            message,
            uid: user?.uid,
            author: user?.displayName,
            photoUrl: user?.photoURL,
          };

          await addDoc(messagesCollection, newMsg); // Saves to fire store
          setMessage("");
        }
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const messagesQuery = query(
          messagesCollection,
          where("articleId", "==", id),
          orderBy("createdAt", "desc"),
          limit(10)
        );

        const snapshot = await getDocs(messagesQuery); // Get all messages documents based on query

        setMessages(
          snapshot.docs.map(
            (doc) => ({ id: doc.id, ...doc.data() } as IMessage) // Normalize message fetched
          )
        );
      } catch (err: any) {
        console.log(err);
      }
    };

    getMessages();
  }, [id]);

  return (
    <Wrapper>
      <Header>
        <Title>Discussion</Title>
      </Header>
      <ChatGroup>
        <h3 className="title-discussion">{title}</h3>
        <InputForm
          placeholder="Comment here"
          icon={Send}
          inputEvent={saveToDB}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!user}
        />
        {!user && <small>You must be signed in first to comment</small>}
      </ChatGroup>
      <CommentsContainer>
        {!!messages &&
          messages.map((item) => {
            return (
              <Comment key={item.id} isOwner={user?.uid === item.uid}>
                <div className="avatar">
                  {!!item?.photoUrl && (
                    <Image
                      src={item.photoUrl}
                      layout="fixed"
                      alt={item.uid}
                      width={50}
                      height={50}
                      quality={10}
                    />
                  )}
                </div>
                <div className="comment">
                  <div className="author">{item.author}</div>
                  <div className="content">{item.message}</div>
                </div>
              </Comment>
            );
          })}
      </CommentsContainer>
    </Wrapper>
  );
};

export default Discussion;

const Wrapper = styled.div`
  border: solid 1px #8a8c8e;
  border-radius: var(--base-radius);
`;

const Header = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  border-bottom: solid 1px #8a8c8e;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
  color: var(--primary-color);
`;

const ChatGroup = styled.div`
  padding: 1rem;
  border-bottom: solid 1px #8a8c8e;

  .title-discussion {
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
    color: var(--primary-color);
  }
`;

const CommentsContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Comment = styled.div<CommentType>`
  display: flex;
  gap: 0.5rem;
  align-self: ${(props) => props.isOwner && "flex-end"};
  flex-direction: ${(props) => props.isOwner && "row-reverse"};

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: var(--primary-color);
    flex: none;
  }

  .comment {
    background-color: var(--primary-color-alt);
    padding: 1rem 1.5rem;
    border-radius: var(--base-radius);

    .author {
      font-weight: bold;
      color: var(--primary-color);
    }
    .content {
      padding: 0.5rem 0;
      line-height: 1.5;
    }
  }
`;
