class ProjectItem extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Project Title';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/300';
        const link = this.getAttribute('link') || '#';

        const isExternal = link.startsWith('http');
        const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';

        this.innerHTML = `
            <a href="${link}" ${targetAttr} class="group block bg-darkbg rounded-md overflow-hidden border border-gray-800 hover:border-peach transition-colors h-full">
                <div class="aspect-square overflow-hidden bg-gray-900">
                    <img src="${image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-3 flex items-center justify-center">
                    <h3 class="font-medium text-gray-100 group-hover:text-peach transition-colors truncate text-center">
                        ${title}
                    </h3>
                </div>
            </a>
        `;
    }
}

customElements.define('project-item', ProjectItem);