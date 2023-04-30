import styled from 'styled-components';

export const StyledCreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
  border-radius: 1rem;
  gap: 1rem;

  header,
  div {
    border: 1px solid red;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    h1 {
      display: flex;
      font-size: 1.125rem;
      font-weight: 600;
      color: #2e2e2e;
      border-bottom: 1px solid #000000;
    }

    label {
      font-size: 0.875rem;
      line-height: 1.3125rem;
      color: #989898;
    }

    div {
      width: 100%;
      flex-direction: column;
    }

    input {
      width: auto;
      border: 2px solid #989898;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 1rem;
      // padding-left: 1rem;
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  button {
    height: 2.8125rem;
    width: 90%;
    border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
