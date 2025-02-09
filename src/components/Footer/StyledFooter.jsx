import styled from "styled-components";

export const StyledFooter = styled.section`


    h4 {
        font-family: 'Playfair Display';
        font-size: 30px;
        line-height: 30px;
        font-weight: 400;
        color: rgba(212, 175, 55, 1);
        margin-bottom: 25px;
        padding: 5% 5% 0;
    }
    .wrapper {
        display: flex;
        padding: 25px 5% 5%;
        justify-content: space-between;
        flex-wrap: wrap;
        .infos {
            p {
                font-family: 'Work Sans';
                font-size: 14px;
                line-height: 14px;
                font-weight: 400;
                color: rgba(220, 200, 136, 1);
                margin-bottom: 15px;
            }
            .socials {
                margin-top: 3.5em;
                display: flex;
                gap: 10px;
            }
        }

        .newsletter {
            p {
                font-family: 'Work Sans';
                font-size: 20px;
                line-height: 20px;
                font-weight: 500;
                color: rgba(212, 175, 55, 1);
            }

            .email {
                position: relative;
                margin-top: 25px;

                input {
                    background: none;
                    border: 1px solid rgba(209, 213, 219, 1);
                    padding: 16px 75px 16px 10px;
                    color: white;
                }
                input::placeholder {
                    color: rgba(220, 200, 136, 1);
                    font-family: 'Work Sans';
                    font-size: 16px;
                    line-height: 16px;
                    font-weight: 400;
                }
                img {
                    position: absolute;
                    bottom: 35%;
                    right: 10px;
                    cursor: pointer;
                }
            }
        }
    }
    
    @media (max-width: 900px) {
        padding: 50px 0;

        h4 {
            text-align: center;
        }
        .wrapper {
            flex-direction: column;
            align-items: center;
            gap: 25px;

            .newsletter {
                p {
                    text-align: center;
                }
            }
        }
    }
`;

