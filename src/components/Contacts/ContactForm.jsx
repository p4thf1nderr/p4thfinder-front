import React, { Component } from 'react';


class ContactForm extends Component {
    render() {
        return (
            <div>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" />
                    </div>
                </div>


                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email input" value="" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;