import { useApi } from "@components/context";
import { Button, InputForm } from "@components/ui";
import styled from "@emotion/styled";
import { postArticle } from "@hooks/article";
import { FormEvent, useState } from "react";

//   title: string;
//   author: string;
//   slug: string;
//   featuredImage?: string;
//   category: string;
//   createdAt: string;
//   excerpt: string;
//   body: string;

const PostArticle = () => {
  const { user } = useApi();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to post an article");
    }

    setLoading(true);
    postArticle({
      author: user.displayName ?? "N/A",
      title,
      featuredImage,
      category,
      excerpt,
      body,
    });
    setLoading(false);
  };

  return (
    <Wrapper>
      {loading && <h1>Loading...</h1>}
      <Form onSubmit={handleSubmit}>
        <InputForm
          placeholder="Insert title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputForm
          placeholder="Insert Featured Image"
          value={featuredImage}
          onChange={(e) => setFeaturedImage(e.target.value)}
        />
        <InputForm
          placeholder="Insert Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputForm
          placeholder="Insert Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <InputForm
          placeholder="Insert Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button type="submit">Create</Button>
      </Form>
    </Wrapper>
  );
};

export default PostArticle;

const Wrapper = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;
