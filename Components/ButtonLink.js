import Link from "next/link";
import styled from "styled-components";
import {ButtonStyle} from "@/Components/Button";

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

export default function ButtonLink(props) {
  return (
    <StyledLink {...props} />
  );
}