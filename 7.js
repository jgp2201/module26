async function fetchCombinedData() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('One or both requests failed');
        }

        const todo = await todoResponse.json();
        const post = await postResponse.json();

        const combinedData = {
            todo: todo,
            post: post
        };

        console.log(combinedData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchCombinedData();
