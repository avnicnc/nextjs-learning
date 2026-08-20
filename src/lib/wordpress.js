const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost/wp-json/wp/v2';

/**
 * Fetch data from WordPress API
 * @param {string} endpoint - The API endpoint to fetch from (e.g. 'posts', 'projects')
 * @param {object} options - Fetch options
 * @returns {Promise<any>}
 */
export async function fetchWordPress(endpoint, options = {}) {
  try {
    const res = await fetch(`${WP_API_URL}/${endpoint}`, {
      ...options,
      // Revalidate frequently for development, adjust for production
      next: { revalidate: 10, ...(options.next || {}) }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from WordPress: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('WordPress Fetch Error:', error);
    // Return empty array/object or rethrow based on your preference
    return null;
  }
}

/**
 * Get all projects
 * Assuming you are using a Custom Post Type called 'projects' or just 'posts'
 * Modify the endpoint if using standard posts (e.g., 'posts?categories=X')
 */
export async function getProjects() {
  // Try 'projects' CPT first, fallback to 'posts' if you modify it later
  // We'll use 'projects?_embed' to get featured images if available
  const data = await fetchWordPress('projects?_embed');
  return data || [];
}

/**
 * Get a single project by slug or ID
 * @param {string} id - The project ID or slug
 */
export async function getProject(id) {
  // If id is numeric, fetch by ID
  const isNumeric = !isNaN(id);
  const endpoint = isNumeric ? `projects/${id}?_embed` : `projects?slug=${id}&_embed`;
  
  const data = await fetchWordPress(endpoint);
  
  if (!data) return null;
  
  // If queried by slug, WordPress returns an array
  if (Array.isArray(data)) {
    return data.length > 0 ? data[0] : null;
  }
  
  return data;
}

/**
 * Get a single page by slug
 * @param {string} slug - The page slug
 */
export async function getPage(slug) {
  const data = await fetchWordPress(`pages?slug=${slug}&_embed`);
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }
  
  return data[0];
}
