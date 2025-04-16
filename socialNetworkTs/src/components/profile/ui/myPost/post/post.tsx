import style from './post.module.css';

interface PostProps {
    message: string;
    count: number;
    key: number;
}

const Post: React.FC<PostProps> = ({message,count}) => {
    return <div className={style.postHolder}>
    <div className={style.post}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s" alt=""/>
        <span>Likes: <span>{count}</span></span>
        </div>
        <div className={style.text}>
            {message}
    </div>
    </div>
}

export default Post;