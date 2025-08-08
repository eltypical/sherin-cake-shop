// Utility function to handle image URLs
export const getImageUrl = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For local paths, return appropriate placeholder
  if (imagePath.includes('cake')) {
    return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop';
  }
  if (imagePath.includes('cupcake')) {
    return 'https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=400&fit=crop';
  }
  if (imagePath.includes('cookies') || imagePath.includes('brownie')) {
    return 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop';
  }
  if (imagePath.includes('custom') || imagePath.includes('wedding')) {
    return 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop';
  }
  
  // Default fallback
  return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop';
};
