import { useApi } from "@components/context";
import { InputForm } from "@components/ui";
import styled from "@emotion/styled";
import { Send } from "@styled-icons/material";
import { formatDistanceToNow } from "date-fns";
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
import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { messagesCollection } from "utils/firebase";

type CommentType = {
  isOwner: boolean;
};

interface IDiscussion {
  id?: string;
  title: string;
}

interface IMessage {
  articleId: string;
  message: string;
  uid: string;
  author: string;
  photoUrl: string;
  createdAt: Timestamp | Date;
}

interface IMessageDoc extends IMessage {
  id: string;
}

const Discussion = ({ id, title }: IDiscussion) => {
  const { user } = useApi();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessageDoc[]>();
  const [loading, setLoading] = useState(false);
  const isDisabled = !!user && user.emailVerified ? false : true;

  const saveToDB = async (e: KeyboardEvent<HTMLInputElement> | MouseEvent) => {
    if (
      ((e as KeyboardEvent<HTMLInputElement>).key == "Enter" ||
        (e as MouseEvent).type == "click") &&
      message.length > 0
    ) {
      try {
        if (message && user?.uid && user.displayName && user.photoURL) {
          const newMsg: IMessage = {
            articleId: id || "",
            createdAt: new Date(),
            message,
            uid: user.uid,
            author: user.displayName,
            photoUrl: user.photoURL,
          };

          setLoading(true);
          await addDoc(messagesCollection, newMsg); // Saves to fire store
          const localMsg = { ...newMsg, id: "Local:" + Date.now() }; // Adds temporary id since it is needed in IMessageDoc
          setMessages((prev) => (prev ? [localMsg, ...prev] : [localMsg])); // Adds newly created message to state
          setMessage("");
          setLoading(false);
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
            (doc) => ({ id: doc.id, ...doc.data() } as IMessageDoc) // Normalize message fetched
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
          disabled={isDisabled}
        />
        {isDisabled && (
          <small>
            You must be signed in and have a verified email first to comment
          </small>
        )}
      </ChatGroup>
      <CommentsContainer>
        {!!messages &&
          messages.map((item) => {
            return (
              <CommentWrapper key={item.id} isOwner={user?.uid === item.uid}>
                <div className="avatar">
                  {!!item?.photoUrl && (
                    <Image
                      src={item.photoUrl}
                      layout="fixed"
                      alt={item.uid}
                      width={50}
                      height={50}
                      quality={25}
                    />
                  )}
                </div>
                <div className="comment">
                  <div className="author">{item.author}</div>
                  <div className="content">{item.message}</div>
                  <div className="date">
                    {formatDistanceToNow(
                      item.createdAt instanceof Timestamp
                        ? item.createdAt.toDate()
                        : item.createdAt
                    )}
                  </div>
                </div>
              </CommentWrapper>
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
  margin-bottom: 2rem;
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

const CommentWrapper = styled.div<CommentType>`
  display: flex;
  gap: 0.5rem;
  align-self: ${(props) => props.isOwner && "flex-end"};
  flex-direction: ${(props) => props.isOwner && "row-reverse"};

  .avatar {
    overflow: hidden;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: var(--primary-color);
    flex: none;
  }

  .comment {
    background-color: var(--primary-color-alt);
    padding: 7px 12px 6px 12px;
    border-radius: var(--base-radius);

    .author {
      font-weight: bold;
      color: var(--primary-color);
      padding: 0.25rem 0;
      font-size: 0.75rem;
    }
    .content {
      color: var(--text-color);
      line-height: 1.5;
    }
    .date {
      font-size: 0.75rem;
      float: right;
      color: var(--text-color-alt);
    }
  }
`;
