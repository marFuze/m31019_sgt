import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGradeData } from '../actions';
import GradeRow from './grade-row';

class GradeTable extends Component {
    componentDidMount(){
        //console.log('Grade Table Component Mounted');
        this.props.getGradeData();
    }

    render(){
        //console.log('grade table props:', this.props);

        const { grades } = this.props;

        const rowElements = grades.map((grade, index) => {
            //return <GradeRow key={grade.id} id={grade.id} name={grade.name} course={grade.course} grade={grade.grade} />
            return <GradeRow key={grade.id} index={index} {...grade} />
        })
           ;

        return (
            <table className="table table-hover mx-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElements}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        grades: state.grades.list
        
    }
}

export default connect(mapStateToProps, { 
    getGradeData: getGradeData
})(GradeTable);
