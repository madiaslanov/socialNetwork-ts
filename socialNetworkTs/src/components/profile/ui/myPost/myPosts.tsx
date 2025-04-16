import Post from "./post/post.js";
import style from "./myPosts.module.css";
import {UseAppDispatch, UseAppSelector} from "../../../../services/reactHooks/reactHooks.ts";
import {useForm} from "react-hook-form";
import {addPost} from "../../model/profileReducer.ts";

type FormField = {
    newPost: string,
    password: string,
    rememberMe: boolean,
}


const MyPostsForm = () => {
    const dispatch = UseAppDispatch();
    const {register, handleSubmit, reset, formState : {errors}} = useForm<FormField>({
        mode: "onSubmit"
    });

    const onSubmit = (values: any ) => {
        if (values.newPost.trim()) {
            dispatch(addPost(values.newPost));
            reset();
        }
    }

    return (
        <div>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                className={style.input}
                type="text"
                placeholder="Enter new Post"
                {...register("newPost",
                    {
                        required: "Type something",
                    })}
            />
            {errors.newPost && <p className={style.error}>{errors.newPost.message}</p>}
            <button
                className={style.button}
                type="submit">
                Add Post
            </button>
        </form>
            <MyPosts/>
        </div>
    );
};

const MyPosts = () => {


    const posts = UseAppSelector((state) => state.profilePages.postsData);
    const postElement = posts.map((p) => <Post message={p.message} count={p.count} key={p.id} />);
    return (
        <div>
            {postElement}
        </div>
    )
}



export default MyPostsForm;
