import React from 'react'


// phai khai bao truoc toan bo link dynamics cho nexxtjs;
export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map((coder) => {
        return {
            params: {
                id: coder.id.toString()
            },
        }
    });

    return{
        paths,
        fallback: false,  // neu k tim thay dung nhu khai bao se ra 404;
    }

}

export const getStaticProps = async (context) => { //context lay ra id;
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json(); // chuyeen sang object; res.json()

    return {
        props: {
            coder: data
        }
    };
}


export default function Detail({ coder }) {
    return (
        <div>
            <h1>{coder.name}</h1>
            <p>{coder.email}</p>
            <p>{coder.website}</p>
        </div>
    );
}
