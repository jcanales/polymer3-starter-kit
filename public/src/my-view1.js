/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/neon-animation/neon-animation.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-form/iron-form.js';
import firebase from 'firebase/app';
import 'firebase/database';


class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
        <firebase-app auth-domain="cfid-300bc.firebaseapp.com   "
                        database-url="https://df-lab.firebaseio.com/"
                        api-key="AIzaSyC0Mt_4iqqTREXNK5yf6LSdjjJQ_N-Loac">
          <firebase-query id="querySchools" path="/schools" data="{{Things}}">
      <div class="card">
        <div class="circle">1</div>
        <h1>Agregar una Escuela</h1>
        <iron-form id="form1">
      <form action="/" method="get">
          <paper-input id="school_name" type="text" name="school_name" required label="Nombre Escuela" value=""></paper-input>
          <paper-input id="school_address" type="text" name="school_address" required label="Dirección" value=""></paper-input>
          <paper-input id="school_type" type="text" name="school_type" required label="Tipo de Escuela" value=""></paper-input>

            <br><br>
            <br>
          <paper-button raised on-click="add">Submit</paper-button>
          <paper-button raised on-click="clear">Reset</paper-button>
      </form>
      </div>

      <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
      <script src="node_modules/web-animations-js/web-animations-next-lite.min.js"></script>

          <script src="https://www.gstatic.com/firebasejs/5.5.2/firebase.js"></script>
          <script>
            // Initialize Firebase
            var config = {
              apiKey: "AIzaSyC0Mt_4iqqTREXNK5yf6LSdjjJQ_N-Loac",
              authDomain: "cfid-300bc.firebaseapp.com",
              databaseURL: "https://cfid-300bc.firebaseio.com",
              projectId: "cfid-300bc",
              storageBucket: "cfid-300bc.appspot.com",
              messagingSenderId: "1069062310022"
            };
            firebase.initializeApp(config);
          </script>
          <script>
          class MyView1 extends Polymer.Element {
              static get is() { return 'my-view1'; }

                var firebase = require('firebase');
                var database = firebase.database();
            //    var add = add();

                add() {
                      writeSchoolData(schoolID, school_name, school_address,school_type){
                      firebase.database().ref('schools/' + schoolID).set({
                        name: school_name,
                        address: school_address,
                        type: school_type
                      });
                    }
                  }

                clear() {
                    this.$.addupdate.reset();
                    this.$.name.value = null;
                    this.$.address.value = null;
                    this.$.type.value = null;
                    this.$.description.value = null;
                    this.$.add.hidden = false;
                    this.$.update.hidden = true;
                    this.$.addTitle.hidden = false;
                    this.$.updateTitle.hidden = true;
                    return;
                  }
               }

      </script>



    `;
  }
}



window.customElements.define('my-view1', MyView1);
