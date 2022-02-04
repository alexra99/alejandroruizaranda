import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import blogs from '../data/blogs';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Cursos'} span={'Cursos'} />
                <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog)=>{
                            return <div key={blog.id} className={'blog-item'}>
                                <div className="image">
                                    <img src={blog.image} alt=""/>
                                </div>
                                <div className="title">
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                    <p>{blog.prof}</p>
                                    <p><span>{blog.plataforma}</span></p>
                                    <p>{blog.horas}</p>


                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        width: 75%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 80%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }

        .title{
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default BlogsPage
