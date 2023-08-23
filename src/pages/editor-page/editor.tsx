/* eslint-disable no-return-assign */
// @ts-nocheck
import React, { useContext, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { EditorContext } from "../../utils/context";

function Editors() {
  const { setIsContent } = useContext(EditorContext);
  const editorRef = useRef(null);
  const { API_KEY } = process.env;

  useEffect(() => {
    const ac = new AbortController();

    if (editorRef.current) {
      setIsContent(editorRef.current.getContent());
    }

    return function cleanup() {
      ac.abort();
    };
  }, [setIsContent, editorRef]);

  return (
    <>
      <Editor
        apiKey={API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          // height: 500,
          // menubar: false,
          // plugins: [
          //   "advlist",
          //   "autolink",
          //   "lists",
          //   "link",
          //   "image",
          //   "charmap",
          //   "preview",
          //   "anchor",
          //   "searchreplace",
          //   "visualblocks",
          //   "code",
          //   "fullscreen",
          //   "insertdatetime",
          //   "media",
          //   "table",
          //   "code",
          //   "help",
          //   "wordcount",
          //   "print",
          //   "preview",
          //   "paste",
          //   "importcss",
          //   "searchreplace",
          //   "autolink",
          //   "autosave",
          //   "save",
          //   "directionality",
          //   "code",
          //   "visualblocks",
          //   "visualchars",
          //   "fullscreen",
          //   "image",
          //   "link",
          //   "media",
          //   "template",
          //   "codesample",
          //   "table",
          //   "charmap",
          //   "hr",
          //   "pagebreak",
          //   "nonbreaking",
          //   "anchor",
          //   "toc",
          //   "insertdatetime",
          //   "advlist",
          //   "lists",
          //   "wordcount",
          //   "imagetools",
          //   "textpattern",
          //   "noneditable",
          //   "help",
          //   "charmap",
          //   "quickbars",
          //   "emoticons",
          // ],
          // toolbar:
          //   "undo redo | blocks | " +
          //   "bold italic forecolor | alignleft aligncenter " +
          //   "alignright alignjustify | bullist numlist outdent indent | " +
          //   "removeformat | help",
          // content_style:
          //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

          // <iframe width="560" height="315" src="https://www.youtube.com/embed/FTjZWZu53WE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          selector: "textarea",
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          image_advtab: true,
          a11y_advanced_options: true,
          file_picker_types: "file image media",
          images_upload_url: "postAcceptor.php",
          images_upload_handler(blobInfo, success) {
            setTimeout(function () {
              /* no matter what you upload, we will turn it into TinyMCE logo :) */
              success(
                "http://moxiecode.cachefly.net/tinymce/v9/images/logo.png",
              );
            }, 2000);
          },
          file_picker_callback(callback, value, meta) {
            // Provide file and text for the link dialog
            if (meta.filetype === "file") {
              callback("mypage.html", { text: "My text" });
            }

            // Provide image and alt text for the image dialog
            if (meta.filetype === "image") {
              callback("myimage.jpg", { alt: "My alt text" });
            }

            // Provide alternative source and posted for the media dialog
            if (meta.filetype === "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "image.jpg",
              });
            }
          },
          link_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_list: [
            { title: "My page 1", value: "https://www.tiny.cloud" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" },
          ],
          importcss_append: true,
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
        }}
      />
    </>
  );
}

export default Editors;
