import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        //Si la categoría ya existe, no la agregamos
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    const onRemoveCategory = ( category ) => {
        setCategories(categories.filter(c => c !== category));
    }

    return (
        <main className='content'>
            <h1>GifApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                        onRemoveCategory={onRemoveCategory}
                    />
                ))
            }

        </main>
    )
}
