import React from 'react'

export default function useFakeData() {
    const [post, setPost] = React.useState({});
    React.useEffect(() => {
        let unsubscribed = false;

        fetch(process.env.FAKE_API, {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify({
                query: `{
                    post(id: 1) {
                        id
                        title
                        body
                    }
                }`
            })
        })
            .then(res => res.json())
            .then((data) => {
                if (!unsubscribed) {
                    setPost(data)
                    console.log(post)
                }
            })

        return () => {
            unsubscribed = true;
        }
    }, [post]);
    
    return {
        post
    }
}
