import React from 'react'
import Edit from "../img/edit.PNG"
import Delete from "../img/delete.PNG"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import Menu from '../components/Menu'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import moment from "moment";
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Single = () => {

    const [post, setPost] = useState({})

    const location = useLocation()

    // console.log(location)

    const navigate = useNavigate()

    const postId = location.pathname.split("/")[2]

    // console.log(postId)

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`)
                // console.log(res)
                setPost(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [postId])

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/posts/${postId}`)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="single">
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    {post.userImg && <img
                        src={post.userImg}
                        alt=""
                    />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link to="/write?edit=2">
                            <img src={Edit} alt="" />
                        </Link>
                        <img onClick={handleDelete} src={Delete} alt="" />
                    </div>}
                </div>
                <h1>{post.title}</h1>
                {post.desc}
            </div>
            <Menu />
        </div>
    )
}

export default Single
