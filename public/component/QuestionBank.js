import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  tableDiv: { width: '100%', overflow: 'hidden', padding: '15px' },
  rowDiv: {},
  colDiv: { float: 'left', padding: '15px', border: '1px groove', margin: '20px' },
  textArea: {},
};

export default class TabsExampleSwipeable extends React.Component {
  state = { slideIndex: 0 };

  render() {
    return (
      <div style={styles.tableDiv}>
        <div style={styles.rowDiv}>
          <div style={styles.colDiv}>
            <TextField
              hintText="2 + 3 = ?"
              floatingLabelText="Latex Input"
              multiLine
              style={styles.textArea}
              rows={2}
            />
          </div>
          <div style={styles.colDiv}>
            <TextField
              hintText="Message Field"
              floatingLabelText="Rendered Output"
              multiLine
              style={styles.textArea}
              rows={2}
            />
          </div>
        </div>
      </div>
    );
  }
}

