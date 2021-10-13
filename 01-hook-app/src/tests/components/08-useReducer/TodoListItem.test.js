import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('pruebas en /TodoListItem/', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrapper = shallow(
        <TodoListItem
            todo = {demoTodos[0]}
            index = {0}
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        
        />
    )

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })


})
