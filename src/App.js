import React from "react";
// import "./styles.css";
import Form from "react-jsonschema-form-bs4";

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
      jsonSchema: jsonschema,
      uiSchema: uischema,
      formData: formdata
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.setEnum();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("updated");
    console.log(this.state);
  }

  setEnum() {
    let schema = this.state.jsonSchema;
    let data = this.state.formData;
    for (let p in schema["properties"]) {
      if (schema["properties"][p]["type"] === "string") {
        schema["properties"][p]["enum"] = ["mike", "mary", "morty"];
        data[p] = "";
      }
    }
    // let dataCopy = this.state.formData;
    this.setState({
      jsonSchema: schema,
      formData: data
    });
    console.log(this.state);
  }

  setFormState = (e) => {
    this.setState({
      jsonSchema: e.schema,
      uiSchema: e.uiSchema,
      formData: e.formData
    });
  };

  submit = () => {
    console.log("Submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Form
          schema={this.state.jsonSchema}
          uiSchema={this.state.uiSchema}
          formData={this.state.formData}
          liveValidate={false}
          showErrorList={false}
          onChange={(e) => this.setFormState(e)}
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
