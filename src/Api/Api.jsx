import axios from 'axios'
import React from 'react'

export const Api = axios.create({
    baseURL:"https://dummyjson.com",
    timeout: 10000
})
