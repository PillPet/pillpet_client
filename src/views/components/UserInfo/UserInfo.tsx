import React from "react";
import css from './UserInfo.module.scss';

interface UserInfoProps {};

const UserInfo : React.FC<UserInfoProps> = () => {
    return (
        <div className={css.userInfo}>
            <div className={css.imgWrap}>
                <img src="https://placehold.it/500" alt="User"/>
            </div>
            
            <div className={css.nameWrap}>
                <h2 className={css.name}>
                    Pet Pill
                </h2>
            </div>

            <div className={css.summaryWrap}>
                <p className={css.summary}>
                    안녕하세요. 필펫입니다.
                </p>
            </div>
        </div>
    )
};

export default UserInfo;