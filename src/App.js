import React from "react";
import "./styles.css";
import Form from "react-jsonschema-form";

let jsonschema = {
  title: "Property dependencies",
  description: "These samples are best viewed without live validation.",
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    credit_card: {
      type: "number"
    },
    billing_address: {
      type: "string"
    }
  }
};

let uischema = {};

let formdata = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonschema: jsonschema,
      uischema: uischema,
      formdata: formdata
    };
  }

  render() {
    return (
      <div className="App">
        <Form
          schema={this.state.jsonschema}
          uiSchema={this.state.uischema}
          formData={this.state.formdata}
          liveValidate={true}
          showErrorList={false}
          onSubmit={this.submit}
        >
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </Form>
      </div>
    );
  }
}

export default App;
