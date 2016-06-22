/**
 * Created by jennifer.allen on 6/21/2016.
 */
export function authorsFormattedForDropdown(authors) {
    return authors.map((author) => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}