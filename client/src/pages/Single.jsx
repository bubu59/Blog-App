import React from 'react'
import Edit from "../img/edit.PNG"
import Delete from "../img/delete.PNG"
import { Link, useLocation } from "react-router-dom"
import Menu from '../components/Menu'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import moment from "moment";

const Single = () => {

    const [post, setPost] = useState([])

    const location = useLocation()

    // console.log(location)

    const postId = location.pathname.split("/")[2]

    // console.log(postId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/post/${postId}`)
                // console.log(res)
                setPost(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [postId])

    return (
        <div className="single">
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    <div className="edit">
                        <Link to="/write?edit=2">
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>qewfwefw wefwefwe wefwefwef wefwefwef</h1>
                <p>wewefwefwe wefwefwef wefwefwegf wewefwewe wegwegwe wefwefwewe wefwefwef wefwefwef wefwefwef wefwefwef wefwefwe wefwefwef </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single
