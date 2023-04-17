import React, { useState } from 'react';

const FormComponent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleDropdownClick = () => {
    setShowForm(!showForm);
  }

  return (
    <>
      <div onClick={handleDropdownClick}>Add form</div>
      {showForm && (
        <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title"  />

        <label htmlFor="link">Link:</label>
        <input type="text" id="link" name="link"  />

        <label htmlFor="keywords">Keywords (comma-separated):</label>
        <input type="text" id="keywords" name="keywords" />

        <label htmlFor="creator">Creator (comma-separated):</label>
        <input type="text" id="creator" name="creator"  />

        <label htmlFor="video_url">Video URL:</label>
        <input type="text" id="video_url" name="video_url" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>

        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content"></textarea>

        <label htmlFor="pubDate">Publication Date:</label>
        <input type="text" id="pubDate" name="pubDate"/>

        <label htmlFor="image_url">Image URL:</label>
        <input type="text" id="image_url" name="image_url"/>

        <label htmlFor="source_id">Source ID:</label>
        <input type="text" id="source_id" name="source_id" />

        <label htmlFor="category">Category (comma-separated):</label>
        <input type="text" id="category" name="category"  />

        <label htmlFor="country">Country (comma-separated):</label>
        <input type="text" id="country" name="country" />


       <label htmlFor="summary">Summary:</label>
       <textarea id="summary" name="summary"></textarea>

      <button type="submit">Submit</button>
  </form>
      )}
    </>
  );
}

export default FormComponent;
