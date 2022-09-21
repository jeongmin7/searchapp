import styled from "styled-components";
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((v, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

export default Pagination;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  gap: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    cursor: revert;
    transform: revert;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;
