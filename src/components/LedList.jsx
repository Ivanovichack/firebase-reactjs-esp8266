import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../config";
import PintaLeds from "./PintaLeds";

export default class LedList extends Component {
    constructor(props){
        super(props)
        this.state = {
            values: null
        }
    }


    ren = () => {
      return (
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseNode path="led/">
            {(data) => {
              const { value } = data;
              if (value === null || typeof value === "undefined") return null;
              const keys = Object.keys(value);
              this.state.values = Object.values(value);             
              return <PintaLeds items={this.state.values}/>;
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>

    );
    }
    render() {
    return(
      this.ren()
    );
  }
}