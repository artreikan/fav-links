import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 75%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 1rem 1.5rem;
  transition: background 0.4s;

  &:hover {
    background: #424242;
  }
`;

const NotFound = styled.p`
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Links = memo(({ filterByCategory, links }) => {
  const { slug } = useParams();

  useEffect(() => {
    filterByCategory(slug);
  }, [slug, filterByCategory]);

  return (
    <Wrapper>
      <List>
        {links.length ? (
          links.map((link) => (
            <ListItem key={link.id}>
              <h4>{link.label}</h4>
              <a href={link.href}>{link.href}</a>
            </ListItem>
          ))
        ) : (
          <NotFound>Ничего не найдено :(</NotFound>
        )}
      </List>
    </Wrapper>
  );
});

export default Links;
