import React, { FC } from 'react'
import './AuthPage.scss'
import {Authorization} from "../../components/Authorization/Authorization";

export interface AuthPageProps {

}

export const AuthPage: FC<AuthPageProps> = ({}) => {
    return(
        <div className="AuthPage">
            <Authorization/>
        </div>
    )
}
