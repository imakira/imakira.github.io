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
      org-export-with-toc nil
      org-export-with-latex t
      org-html-html5-fancy t
      org-html-toplevel-hlevel 2
      org-export-with-section-numbers nil
      org-export-headline-levels 6)

(defun org->html-to-stdout (file)
  (save-window-excursion
    (find-file file)
    (let* ((keywords '("title" "category" "tags" "email" "language" "author"))
           (kvs (org-collect-keywords keywords)))
      (princ (json-encode (append
                           (mapcar (lambda (kv)
                                     (cons (downcase (car kv))
                                           (cadr kv)))
                                   kvs)
                           `((content .
                                      ,(progn
                                         (org-html-export-as-html nil nil nil t)
                                         (buffer-string))))))))))



(org->html-to-stdout (concat default-directory "blogs/demo.org"))
