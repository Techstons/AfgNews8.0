import { useApi } from "@components/context";
import { Button, Container, InputForm } from "@components/ui";
import styled from "@emotion/styled";
import { Edit } from "@styled-icons/material";
import { updateProfile } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useApi();
  const router = useRouter();

  const [image, setImage] = useState({
    value: user?.photoURL,
    disabled: false,
  });
  const [displayName, setDisplayName] = useState({
    value: user?.displayName,
    disabled: true,
  });
  const [email, setEmail] = useState({
    value: user?.email,
    disabled: true,
  });

  const saveToFirebase = async () => {
    if (!user) return alert("User not found");
    await updateProfile(user, { displayName: displayName.value });
    setDisplayName({ ...displayName, disabled: true });
  };

  useEffect(() => {
    setImage({ ...image, value: user?.photoURL });
    setEmail({ ...email, value: user?.email });
    setDisplayName({ ...displayName, value: user?.displayName });

    if (!user) router.push("/");
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <DetailsContainer>
        <Title>Personal Details</Title>
        <div className="img">
          <Image
            src={image?.value ? image.value : "/placeholder.svg"}
            alt={image?.value ?? "Profile"}
            layout="fixed"
            height={64}
            width={64}
          />
        </div>
        <div>
          <label>Email</label>
          <Detail>
            <InputForm
              value={email.value ?? ""}
              disabled={email.disabled}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
            />
          </Detail>
        </div>
        <div>
          <label>Display name</label>
          <Detail>
            <InputForm
              value={displayName?.value ?? ""}
              disabled={displayName.disabled}
              onChange={(e) =>
                setDisplayName({ ...displayName, value: e.target.value })
              }
            />
            <Button
              onClick={() =>
                setDisplayName({
                  ...displayName,
                  disabled: !displayName.disabled,
                })
              }
            >
              <Edit size={24} />
            </Button>
          </Detail>
        </div>
        <Button onClick={saveToFirebase}>Confirm</Button>
      </DetailsContainer>
    </Container>
  );
};

export default Profile;

const Title = styled.h2``;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  gap: 1.5rem;
  max-width: 24rem;
  margin: 2.5rem auto;

  .img {
    align-self: center;

    img {
      border-radius: 100%;
    }
  }
`;

const Detail = styled.div`
  display: flex;
  gap: 0.25rem;

  button {
    max-width: min-content;
  }
`;
