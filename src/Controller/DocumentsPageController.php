<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DocumentsPageController extends AbstractController
{
    #[Route('/documents/page', name: 'app_documents_page')]
    public function index(): Response
    {
        return $this->render('documents_page/index.html.twig', [
            'controller_name' => 'DocumentsPageController',
        ]);
    }
}
