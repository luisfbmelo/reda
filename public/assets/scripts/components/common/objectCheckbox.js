import React, { Component, PropTypes } from 'react';

// Components
import CheckboxGroup from 'react-checkbox-group';

/**
 * Serializes and deserializes complex values to and from JSON
 *
 * Disclaimer: For demo purposes only!! Using <select multiple> is very awkward.
 */
class ObjectCheckbox extends Component {
  render() {
    const { multiple, onChange, options, value, ...rest } = this.props;
    const parse = event => {
      if (multiple) {
        const result = []
        // event.target.selectedOptions is a NodeList, not an array. Gross.
        for (let index = 0; index < event.target.selectedOptions.length; index++) {
          result.push(event.target.selectedOptions[index].value)
        }
        return result
      }
      return event.target.value
    }
    const val = Array.isArray(value) ? value.map(JSON.stringify) : JSON.stringify(value)
    return (
      <CheckboxGroup
            name="access"
            value={val}
            onChange={event => onChange(parse(event))}
          >
            {
              Checkbox => (
                <div className="row">
                  {_.sortBy(this.props.mapProps.access.data, 'title').map((item,index) => {
                    return (
                      <div key={"access-"+item.id} className="col-xs-6">
                        <Checkbox value={JSON.stringify(option)} id={"access-"+item.id}/> 
                        <label htmlFor={"access-"+item.id}>{item.title}</label>
                      </div>
                    )
                  })}
                </div>
              )
            }
      </CheckboxGroup>
    )
  }
}

ObjectCheckbox.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  })),
  value: PropTypes.any // array or individual value
}

export default ObjectCheckbox