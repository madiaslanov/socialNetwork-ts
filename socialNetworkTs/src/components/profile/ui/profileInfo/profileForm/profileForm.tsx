import { useForm } from "react-hook-form";
import styles from "./profileForm.module.css";
import {profileAboutMe} from "../../../model/profileReducer.ts";
import {UseAppDispatch} from "../../../../../services/reactHooks/reactHooks.ts";
import {AboutMeType, ProfileFormFields} from "../../../model/profileTypes.ts";
import {RefObject} from "react";

interface ProfileFormProps{
    profileData : AboutMeType
    formRef: RefObject<HTMLFormElement | null>;
    onSubmitSuccess : () => void;
}


const ProfileForm: React.FC<ProfileFormProps> = ({ profileData, formRef, onSubmitSuccess }) => {
    const dispatch = UseAppDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm<ProfileFormFields>({
        mode: "onSubmit"
    });

    const onSubmit = (values : ProfileFormFields) => {
        const formattedValues = {
            fullName: values.fullName,
            aboutMe: values.aboutMe,
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            contacts: {
                github: values.contactsGithub
            }
        };

        dispatch(profileAboutMe(formattedValues)).then(() => {
            onSubmitSuccess();
        })
    };


    return (
        <div className={styles.form}>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Full Name</p>
                    <input type="text" {...register("fullName", {required: "Required"})}
                           defaultValue={profileData?.fullName || ""}/>
                    {errors.fullName && <span className={styles.errors}>{errors.fullName.message}</span>}
                </label>

                <label>
                    <p>About me:</p>
                    <input type="text" {...register("aboutMe", { required: "Required" })}
                           defaultValue={profileData?.aboutMe || ""}/>
                    {errors.aboutMe && <span className={styles.errors}>{errors.aboutMe.message}</span>}
                </label>

                <label>
                    <p>Looking for a job:</p>
                    <input type="checkbox" {...register("lookingForAJob")}
                           defaultChecked={profileData?.lookingForAJob || false}/>
                </label>

                <label>
                    <p>My main skills:</p>
                    <input type="text" {...register("lookingForAJobDescription", { required: "Required" })}
                           defaultValue={profileData?.lookingForAJobDescription || ""}/>
                    {errors.lookingForAJobDescription &&
                        <span className={styles.errors}>{errors.lookingForAJobDescription.message}</span>}
                </label>

                <label>
                    <p>GitHub:</p>
                    <input type="text" {...register("contactsGithub", { required: "Required" })}
                           defaultValue={profileData?.contacts?.key || ""}/>
                    {errors.contactsGithub && <span className={styles.errors}>{errors.contactsGithub.message}</span>}
                </label>

                <button type="submit" style={{ display: "none" }}></button>
            </form>
        </div>
    );
};

export default ProfileForm;
