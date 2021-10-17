import React from 'react';

function HomePage () {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">UIKIT Bootstrap 5</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Первым из спускаемого аппарата достали командира корабля Новицкого, а затем Пересильд и Шипенко. Их встретили глава Роскосмоса Дмитрий Рогозин, гендиректор Первого канала Константин Эрнст, медики, спасатели и другие специалисты.
          </p>
        </div>
      </div>

      <div className="container-fluid px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Название колонки</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">

            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>
          </div>
          <div className="feature col">
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
