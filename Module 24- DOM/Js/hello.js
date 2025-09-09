console.log('Hello from JavaScript!!!');

const sections = document.querySelectorAll('section')

for (const section of sections)
{
    section.style.backgroundColor='lightblue'
    section.style.border = ('3px solid black' )
}