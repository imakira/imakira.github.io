;; init.el --- Description -*- lexical-binding: t; -*-
(require 'org)
(require 'json)

(setq org-html-head ""
      org-html-head-extra ""
      org-html-head-include-default-style nil
      org-html-head-include-scripts nil
      org-html-preamble nil
      org-html-postamble nil
      org-html-use-infojs nil
      org-export-body-only t
      org-export-with-toc nil)

(defun org->html-to-stdout (file)
  (save-window-excursion
    (find-file file)
    (let ((keywords (org-collect-keywords '("title"))))
      (princ (json-encode `((title . ,(alist-get keywords "title"))
                            (content .
                                     ,(progn
                                        (org-html-export-as-html nil nil nil t)
                                        (buffer-string)))))))))


