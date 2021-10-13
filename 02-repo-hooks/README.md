# Notas

Repositorio contiene varios customHooks y usarlos eventualmente par ano volver a escribirlos.


# useCounter Hook

Ejemplo de uso:

```
    const {counter, increment, decrement, reset} = useCounter(10);
```

useCounter() // recibe un valor x defecto

# useFetch Hook

Ejemplo: 

```
    const url = 'endpoint de una aip';
    const {data:null, loading: true, error:null} = useFecth(url);
```

# useForm Hook

Ejemplo: 

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    }

    const [ formValues, handleinputChange, reset ] = useForm(initialForm);
```