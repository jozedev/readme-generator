import dedent from 'dedent';
import { ReadmeSection } from '../types.d';

export const DEFAULT_SECTIONS: ReadmeSection[] = [
    {
        id: '1',
        name: 'Title and Description',
        content: dedent`
        # Project Title
        
        A brief description about your project.
        `,
    }, {
        id: '2',
        name: 'Acknowledgements',
        content: dedent`
        ## Acknowledgements
        
        - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
        - [Awesome README](https://github.com/matiassingers/awesome-readme)
        `,
    }, {
        id: '3',
        name: "Authors",
        content: "\n## Authors\n- [@octokatherine](https://www.github.com/octokatherine)\n"
    }, {
        id: '4',
        name: 'Api Reference',
        content: dedent`
        ## API Reference

        #### Get all items

        \`\`\`http
        GET / api / items
        \`\`\`

        | Parameter | Type     | Description                |
        | :-------- | :------- | :------------------------- |
        | \`api_key\` | \`string\` | **Required**. Your API key |
        `,
    }, {
        id: '5',
        name: 'Features',
        content: dedent`        
        ## Features

        - Light/dark mode toggle
        - Live previews
        - Fullscreen mode
        - Cross platform
        `,
    }, {
        id: '6',
        name: 'FAQ',
        content: dedent`
        ## FAQ

        #### Question 1

        Answer 1

        #### Question 2

        Answer 2
        `,
    }, {
        id: '7',
        name: 'License',
        content: dedent`
        ## License

        [MIT](https://choosealicense.com/licenses/mit/)
        `,
    }, {
        id: '8',
        name: 'Used By',
        content: dedent`
        ## Used By

        This project is used by the following companies:
        
        - Company 1
        - Company 2
        `,
    }, {
        id: '9',
        name: 'Contributors',
        content: dedent`
        ## Contributing

        Contributions are always welcome!

        See \`contributing.md\` for ways to get started.

        Please adhere to this project's \`code of conduct\`.
        `,
    }, {
        id: '10',
        name: 'Documentation',
        content: dedent`
        ## Documentation

        [Documentation](https://linktodocumentation)
        `,
    }, {
        id: '11',
        name: 'Installation',
        content: dedent`
        ## Installation

        Install my-project with npm

        \`\`\`bash
        npm install my-project
        cd my-project
        \`\`\` 
        `,
    }, {
        id: '12',
        name: 'Usage',
        content: dedent`        
        ## Usage/Examples

        \`\`\`javascript
        import Component from 'my-project'

        function App() {
        return <Component />
        }
        \`\`\`
        `,
    }, {
        id: '13',
        name: 'Suupport',
        content: dedent`
        ## Support

        For support, email fake@fake.com or join our Slack channel.
        `,
    }, {
        id: '14',
        name: "Badges",
        content: dedent`       
        ## Badges

        Add badges from somewhere like: [shields.io](https://shields.io/)

        [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
        
        [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
        
        [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
        `
    },
]