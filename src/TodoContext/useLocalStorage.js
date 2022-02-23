import React, { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    const [error, setError] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error)
            }
        }, 1000)
    });

    const saveItem = (newTodos) => {
        try {
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newTodos);
        } catch (error) {
            setError(error);
        }

    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}


export { useLocalStorage };
