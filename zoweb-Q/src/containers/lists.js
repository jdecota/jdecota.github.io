export const lists = {
    test: [
        { key: 'taxlista', text: 'List Item 1',
            subs: [
                {key: 'samplesub', text:'Sublist Item'},
                {key: 'nestedsub', text: 'Sublist Item With Sublist', 
                    subs: [
                        {key: 'aaa', text: 'Nested Sublist Item'}
                    ]
                }
            ]
        },
        { key: 'taxlistb', text: 'List Item 2' }
    ]
}

export default lists;