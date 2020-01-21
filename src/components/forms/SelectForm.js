import React from 'react';

const SelectForm = props => {
    return (
        <form className="" onSubmit={this.handleSubmit}>
            <p>SelectForm</p>
            <label>
                Pick your favorite flavor:
                <select value={props.fruit} onChange={this.onChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                </select>
            </label>
            <label htmlFor="select1" >Select1</label>
            <select value={props.nums} onChange={this.onChange} className="form-control">
                <option value="select">Select an Option</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}
export default SelectForm;
