export const table = data => {
  return `
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>title</th>
                <th>email</th>
                <th>role</th>
            </tr>
        </thead>
        <tbody>
           ${data
             .map(
               info =>
                 `<tr>
                <td>${info.name}</td>
                <td>${info.title}</td>
                <td>${info.email}</td>
                <td>${info.role}</td>
           </tr>`
             )
             .join("")}
        </tbody>
    </table>
    `
}
