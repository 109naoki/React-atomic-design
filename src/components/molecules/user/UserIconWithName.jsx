import styled from "styled-components";
export const UserIconWithName = (props) => {
  const { image, name } = props;

  return (
    <Scontainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weignt: bold;
  margin: 0;
  color: #40514e;
`;
