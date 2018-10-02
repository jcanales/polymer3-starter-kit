

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
import firebase from 'firebase/app'


class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <div class="card">
        <div class="circle">1</div>
        <h1>Agregar una Escuela</h1>
        <iron-form id="form1">
      <form action="/" method="get">
          <paper-input id="school_name" type="text" label="Nombre Escuela"></paper-input>
          <paper-input id="school_address" type="text" label="Dirección"></paper-input>
          <paper-input id="school_type" type="text" label="Tipo de Escuela"> </paper-input>
            <br><br>
            <br>
          <paper-button raised on-click="add">Submit</paper-button>
          <paper-button raised on-click="clear">Reset</paper-button>
      </form>
      </div>
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
      </script>
    `;
  }
              add() {
                        function writeUserData(school_name, school_address, school_type) {
                        firebase.database().ref('schools/').set({
                          school_name: school_name,
                          school_address: school_address,
                          school_type : school_type
                        });
                        }
                        this.$.school_name.value = null;
                        this.$.school_address.value = null;
                        this.$.school_type.value = null;
                       }
                clear() {
                    this.$.school_name.value = null;
                    this.$.school_address.value = null;
                    this.$.school_type.value = null;
                  }
 }

window.customElements.define('my-view1', MyView1);
