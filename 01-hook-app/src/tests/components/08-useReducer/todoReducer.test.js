import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";




describe('Pruebas en todoreducer', () => { 

    test('Debe retornar estado x defecto', () => {
        const state = todoReducer( demoTodos, {});
        expect(state).toEqual(demoTodos);

    })

    test('Debe agregar todo', () => {

        // const state = todoReducer( demoTodos, {});
        // expect(state).toEqual(demoTodos);
        const newTodo = {
            id: 3,
            desc: 'Aprender Hooks',
            done:false
        }

        const action = {
            type:'add',
            payload:newTodo
        }

        const state = todoReducer(demoTodos,action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos,newTodo]);
        


    })

    test('Debe borrar todo', () => {

        // const state = todoReducer( demoTodos, {});
        // expect(state).toEqual(demoTodos);
        const deleteTodo = {
            id: 2,
            desc: 'Aprender Hooks',
            done:false
        }

        const action = {
            type:'delete',
            payload:deleteTodo.id
        }

        const state = todoReducer(demoTodos,action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);
      


    })


    test('Debe de hacer TOGGLE del todo', () => {

    

        const action = {
            type:'toggle',
            payload:1
        }

        const state = todoReducer(demoTodos,action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual([demoTodos[1]]);
        // expect(state.length).toBe(1);
        // expect(state).toEqual([demoTodos[0]]);
      


    })

    
})
