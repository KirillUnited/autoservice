// import Button from 'components/Button/Button';
import React from 'react';

const HeaderMain = ({ handleModal }) => {
  const assets = `${process.env.PUBLIC_URL}/images`;

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-e3adf05 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e3adf05" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-db968b7" data-id="db968b7" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-405bc8f elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-wp-widget-ocean_custom_header_logo" data-id="405bc8f" data-element_type="widget" data-widget_type="wp-widget-ocean_custom_header_logo.default">
              <div className="elementor-widget-container">
                <div className="custom-header-logo  left">
                  <div id="site-logo" className="" itemScope itemType="https://schema.org/Brand">
                    <div id="site-logo-inner" className="">
                      <a href="index.html" className="custom-logo-link" rel="home" aria-current="page"><img width={170} height={86} src={`${assets}/logo.png`} className="custom-logo" alt="Riamotors" title="Автосервис РиаМоторс" /></a>
                    </div>{/* #site-logo-inner */}
                  </div>{/* #site-logo */}
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2243945 elementor-widget__width-initial header-ria elementor-widget-tablet__width-initial elementor-widget elementor-widget-text-editor" data-id={2243945} data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <p><strong>ООО «РиаМоторс»</strong><br />Станция технического
                  обслуживания</p>
                <div className="colortext"><strong><em>Гарантия качества для
                  Вас!</em></strong></div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-be691c4 elementor-hidden-tablet elementor-hidden-phone" data-id="be691c4" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-21dcc29 elementor-align-center zapis-na-remont elementor-widget elementor-widget-button" data-id="21dcc29" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  {/* <Button onClick={() => handleModal(true)}>
                    Запись на ремонт
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-83e1c95 elementor-widget elementor-widget-heading" data-id="83e1c95" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">Пон. -
                  Пят. 8.00 - 20.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b3fdd69" data-id="b3fdd69" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-7649877 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id={7649877} data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default"><a href="tel:+375%2029%20372%2063%2065">+375 29 372 63 65</a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-34cf2e7 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="34cf2e7" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default"><a href="tel:+375%2029%20872%2063%2065">+375 29 872 63 65</a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f98b5b0 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="f98b5b0" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default"><a href="viber://add?number=+375%2029%20872%2063%2065">Написать
                  в Viber</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeaderMain;
