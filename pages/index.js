import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import * as XLSX from "xlsx";
import {linkShorter,getPostId,xRemover,AdNameJoiner,fullJoiner} from "../utils/FbLinkFunctions"

import Image from 'next/image'

export default function Home() {

  const [items, setItems] = useState([]);

    const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  return (
    <div>
      <div className ="topContainer">
      <div className="logo">
      <Image src="/t114.png" alt="me" width="202" height="100" />
      </div>
      <input className="inputButton" 
      id="file"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <label for='file'>Upload XLXS File</label>
      </div>

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Ad Name</th>
            <th scope="col">New Link</th>
            <th scope="col">Post Id</th>
            <th scope="col">New Ad Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.permalink}>
              <th>{d["Ad Name"]}</th>
              <td>{linkShorter(d["Permalink"])}</td>
              <td>{getPostId(d["Permalink"])}</td>
              <td>{fullJoiner(d["Permalink"],d["Ad Name"])}</td>

              
            </tr>
          ))}
        </tbody>
      </table>
      {console.log(items)}
    </div>
  )
}



