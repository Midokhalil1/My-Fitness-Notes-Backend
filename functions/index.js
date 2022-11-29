import functions from "firebase-functions"
import cors from "cors"
import express from "express"
import { addNewNote, getAllNotes, updateNote, getOneNote, deleteNote  } from './src/notes.js';



// // const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

app.post('/notes', addNewNote)
app.get('/notes', getAllNotes)
app.patch('/notes/:noteId', updateNote)
app.get('/notes/:noteId',getOneNote)
app.delete('/notes/:noteId', deleteNote)



app.get('/test', (req, res) => {
    res.send('😃 Hooray, it works!')
}) 

export const api = functions.https.onRequest(app);

