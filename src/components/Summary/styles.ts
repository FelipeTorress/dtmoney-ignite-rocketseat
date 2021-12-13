import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);//repetir 1fr 3x
    gap: 2rem;//espaco entre items
    margin-top:-10rem;

    div {
        background: var(--shape);
        padding:1.5rem 2rem;
        border-radius:0.25rem;
        color:var(--text-title);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between; 
    }

    Strong{
        display: block;//por padrao strong vem inline
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`;